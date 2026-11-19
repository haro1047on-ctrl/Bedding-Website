import React, { useState } from 'react';
import { PRODUCTS, JOURNAL_ARTICLES } from './data/mockData';
import { Product, BeddingCategory, BedSize, ColorVariant, CartItem, JournalArticle } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { AtelierManifesto } from './components/AtelierManifesto';
import { BestsellersRail } from './components/BestsellersRail';
import { MaterialStory } from './components/MaterialStory';
import { ShopTheLook } from './components/ShopTheLook';
import { QualityTrust } from './components/QualityTrust';
import { ReviewsSection } from './components/ReviewsSection';
import { JournalSection } from './components/JournalSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { FabricCareModal } from './components/FabricCareModal';
import { ArticleModal } from './components/ArticleModal';
import { CatalogView } from './components/CatalogView';

export function App() {
  // Navigation View State
  const initialView = typeof window !== 'undefined' && window.location.search.includes('view=catalog') ? 'catalog' : 'home';
  const [activeView, setActiveView] = useState<'home' | 'catalog'>(initialView);
  const [catalogCategory, setCatalogCategory] = useState<BeddingCategory | 'all'>('all');

  // Modals & Drawers State
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [careGuideOpen, setCareGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProductColor, setSelectedProductColor] = useState<ColorVariant | undefined>(undefined);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Cart State (Initialized empty for a new visitor)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hash deep-link navigation & URL params
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const prodId = params.get('product');
      if (prodId) {
        const found = PRODUCTS.find(p => p.id === prodId || p.id.includes(prodId));
        if (found) setSelectedProduct(found);
      }
      if (params.get('cart') === 'true') {
        setCartOpen(true);
      }
    }

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        el?.scrollIntoView({ behavior: 'auto' });
      }, 150);
    }
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    color: ColorVariant,
    size: BedSize,
    quantity: number,
    unitPrice?: number
  ) => {
    const itemUnitPrice = unitPrice !== undefined 
      ? unitPrice 
      : ((product.variantPrices && product.variantPrices[size]) ?? product.price);
    const itemKey = `${product.id}-${color.name}-${size}`;
    setCartItems(prev => {
      const existing = prev.find(i => i.id === itemKey);
      if (existing) {
        return prev.map(i => i.id === itemKey ? { 
          ...i, 
          quantity: i.quantity + quantity,
          unitPrice: i.unitPrice ?? itemUnitPrice,
        } : i);
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          selectedColor: color,
          selectedSize: size,
          quantity,
          unitPrice: itemUnitPrice,
        }
      ];
    });
    showToast(`Added ${quantity}x ${product.name} (${color.name}, ${size}) to your bag.`);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Thank you for exploring SEREIN Atelier! All orders are packaged in reusable linen pouches with complimentary express delivery across Pakistan.');
  };

  // Navigation handlers
  const handleSelectCategory = (category: BeddingCategory | 'all') => {
    setCatalogCategory(category);
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product, initialColor?: ColorVariant) => {
    setSelectedProduct(product);
    setSelectedProductColor(initialColor);
  };

  const handleScrollToSection = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-porcelain text-soft-graphite flex flex-col font-sans selection:bg-oat selection:text-umber">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-umber text-porcelain px-5 py-3 shadow-elevated border border-umber-dark/50 text-xs font-sans flex items-center space-x-2 animate-fadeIn rounded-sm">
          <span className="w-2 h-2 rounded-full bg-olive-ink"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header (Transparent on Hero, Solid on Scroll) */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        onOpenMaterialGuide={() => setCareGuideOpen(true)}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onNavigateHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeView={activeView}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeView === 'home' ? (
          <>
            {/* 1. Hero Campaign Section (Quiet Luxury, 3 slides, directional horizontal slide transitions) */}
            <Hero
              onExploreCollection={() => handleSelectCategory('all')}
              onOpenMaterialStory={() => handleScrollToSection('material-story-section')}
              onOpenBedroomLooks={() => handleScrollToSection('bedroom-inspiration-section')}
            />

            {/* 2. Category Discovery (Asymmetric image-led composition) */}
            <CategoryStrip onSelectCategory={handleSelectCategory} />

            {/* 3. Brand Story / Atelier Manifesto (Deliberate editorial pause) */}
            <div id="atelier-manifesto">
              <AtelierManifesto onOpenMaterialGuide={() => setCareGuideOpen(true)} />
            </div>

            {/* 4. Atelier Bestsellers Single-Row Horizontal Sliding Rail */}
            <BestsellersRail
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onQuickView={handleSelectProduct}
              onViewAll={() => handleSelectCategory('all')}
            />

            {/* 5. Material Story & Fabric Science */}
            <div id="material-story-section">
              <MaterialStory onOpenCareGuide={() => setCareGuideOpen(true)} />
            </div>

            {/* 6. Bedroom Inspiration Slider (Directional horizontal slide transitions with hotspots) */}
            <ShopTheLook
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onQuickView={handleSelectProduct}
            />

            {/* 7. Quality and Trust Pillars */}
            <QualityTrust />

            {/* 8. Verified Customer Reviews */}
            <ReviewsSection />

            {/* 9. The Atelier Journal */}
            <div id="atelier-journal">
              <JournalSection onSelectArticle={(article) => setSelectedArticle(article)} />
            </div>

            {/* 10. Newsletter Invitation */}
            <Newsletter />
          </>
        ) : (
          <CatalogView
            products={PRODUCTS}
            initialCategory={catalogCategory}
            onSelectProduct={handleSelectProduct}
            onQuickView={handleSelectProduct}
            onNavigateHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenBuildBed={() => handleSelectCategory('all')}
        onOpenMaterialGuide={() => setCareGuideOpen(true)}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenCareGuide={() => setCareGuideOpen(true)}
        onNavigateHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Product Detail Modal (with directional gallery slide motion) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          initialColor={selectedProductColor}
          isOpen={!!selectedProduct}
          onClose={() => {
            setSelectedProduct(null);
            setSelectedProductColor(undefined);
          }}
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={() => setSizeGuideOpen(true)}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onExplore={() => {
          setActiveView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Fabric Care Modal */}
      <FabricCareModal
        isOpen={careGuideOpen}
        onClose={() => setCareGuideOpen(false)}
      />

      {/* Journal Article Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onExploreBedding={() => handleSelectCategory('all')}
      />

    </div>
  );
}

export default App;
