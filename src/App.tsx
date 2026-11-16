import React, { useState } from 'react';
import { PRODUCTS, JOURNAL_ARTICLES } from './data/mockData';
import { Product, BeddingCategory, BedSize, ColorVariant, CartItem, JournalArticle } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { AtelierManifesto } from './components/AtelierManifesto';
import { BestsellersGrid } from './components/BestsellersGrid';
import { BuildYourBedStudio } from './components/BuildYourBedStudio';
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
  const [activeView, setActiveView] = useState<'home' | 'catalog' | 'build-bed'>('home');
  const [catalogCategory, setCatalogCategory] = useState<BeddingCategory | 'all'>('all');

  // Modals & Drawers State
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [careGuideOpen, setCareGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProductColor, setSelectedProductColor] = useState<ColorVariant | undefined>(undefined);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Cart State (Initialized with a default luxury piece to showcase the UI immediately)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'normandy-linen-duvet-oat-queen',
      product: PRODUCTS[0],
      selectedColor: PRODUCTS[0].colors[0], // Oatmeal Natural
      selectedSize: 'Queen',
      quantity: 1,
    }
  ]);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, color: ColorVariant, size: BedSize, quantity: number) => {
    const itemKey = `${product.id}-${color.name}-${size}`;
    setCartItems(prev => {
      const existing = prev.find(i => i.id === itemKey);
      if (existing) {
        return prev.map(i => i.id === itemKey ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { id: itemKey, product, selectedColor: color, selectedSize: size, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} (${color.name}, ${size}) to your bag.`);
    setCartOpen(true);
  };

  const handleAddBundleToCart = (items: { product: Product; color: ColorVariant; size: BedSize }[]) => {
    setCartItems(prev => {
      let updated = [...prev];
      items.forEach(bundleItem => {
        const itemKey = `${bundleItem.product.id}-${bundleItem.color.name}-${bundleItem.size}`;
        const existingIndex = updated.findIndex(i => i.id === itemKey);
        if (existingIndex > -1) {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + 1,
          };
        } else {
          updated.push({
            id: itemKey,
            product: bundleItem.product,
            selectedColor: bundleItem.color,
            selectedSize: bundleItem.size,
            quantity: 1,
          });
        }
      });
      return updated;
    });
    showToast(`Added complete Atelier Bed Suite (${items.length} items with 15% discount) to your bag.`);
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
    alert('Thank you for exploring SEREIN Atelier! Checkout is connected to our sustainable fulfillment center in Guimarães.');
  };

  // Navigation handlers
  const handleSelectCategory = (category: BeddingCategory | 'all') => {
    setCatalogCategory(category);
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBuildBed = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('build-bed-studio');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('build-bed-studio');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (product: Product, initialColor?: ColorVariant) => {
    setSelectedProduct(product);
    setSelectedProductColor(initialColor);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-porcelain text-soft-graphite flex flex-col font-sans selection:bg-oat selection:text-umber">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-umber text-porcelain px-5 py-3 shadow-elevated border border-umber-dark/50 text-xs font-sans flex items-center space-x-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-olive-ink"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        onOpenBuildBed={handleOpenBuildBed}
        onOpenMaterialGuide={() => {
          if (activeView !== 'home') setActiveView('home');
          setTimeout(() => {
            window.scrollTo({ top: 1800, behavior: 'smooth' });
          }, 100);
        }}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onNavigateHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeView={activeView}
      />

      {/* View Router */}
      <main className="flex-1">
        {activeView === 'home' ? (
          <>
            {/* Section 3: Hero */}
            <Hero
              onExploreCollection={() => handleSelectCategory('all')}
              onOpenBuildBed={handleOpenBuildBed}
            />

            {/* Section 4: Shop by Category */}
            <CategoryStrip onSelectCategory={handleSelectCategory} />

            {/* Section 5: Brand Point of View & Atelier Manifesto */}
            <AtelierManifesto onOpenMaterialGuide={() => setCareGuideOpen(true)} />

            {/* Section 6 & 7: Bestsellers Collection Grid */}
            <BestsellersGrid
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onQuickView={handleSelectProduct}
              onViewAll={() => handleSelectCategory('all')}
            />

            {/* Section 9: Signature Feature — Build Your Bed Studio */}
            <BuildYourBedStudio
              products={PRODUCTS}
              onAddBundleToCart={handleAddBundleToCart}
            />

            {/* Section 8: Material Story & Tactile Fabric Science */}
            <MaterialStory onOpenCareGuide={() => setCareGuideOpen(true)} />

            {/* Section 9b: Styling & Bedroom Suites Inspiration */}
            <ShopTheLook
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
              onQuickView={handleSelectProduct}
            />

            {/* Section 10: Quality and Trust */}
            <QualityTrust />

            {/* Section 11: Customer Reviews */}
            <ReviewsSection />

            {/* Section 12: The Atelier Journal */}
            <JournalSection onSelectArticle={(article) => setSelectedArticle(article)} />

            {/* Section 13: Newsletter Invitation */}
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

      {/* Section 14: Comprehensive Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenBuildBed={handleOpenBuildBed}
        onOpenMaterialGuide={() => {
          if (activeView !== 'home') setActiveView('home');
          setTimeout(() => {
            window.scrollTo({ top: 1800, behavior: 'smooth' });
          }, 100);
        }}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenCareGuide={() => setCareGuideOpen(true)}
        onNavigateHome={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Product Detail Modal */}
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
          setActiveView('home');
          window.scrollTo({ top: 700, behavior: 'smooth' });
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

      {/* Journal Article Reading Modal */}
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
