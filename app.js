// Application Data
let appData = {
  shops: [
    {
      id: 1,
      name: "Fresh Grocers",
      category: "Grocery Store",
      address: "123 Main Street",
      business_hours: "8:00 AM - 10:00 PM",
      image: "🛒",
      owner_id: 2
    },
    {
      id: 2,
      name: "QuickMeds Pharmacy",
      category: "Pharmacy",
      address: "456 Health Avenue", 
      business_hours: "24/7",
      image: "💊",
      owner_id: 3
    },
    {
      id: 3,
      name: "Tasty Bites Restaurant",
      category: "Restaurant",
      address: "789 Food Street",
      business_hours: "11:00 AM - 11:00 PM",
      image: "🍕",
      owner_id: 4
    },
    {
      id: 4,
      name: "TechHub Electronics",
      category: "Electronics",
      address: "321 Tech Lane",
      business_hours: "10:00 AM - 9:00 PM", 
      image: "📱",
      owner_id: 5
    }
  ],
  products: [
    {
      id: 1,
      shop_id: 1,
      name: "Fresh Bananas",
      price: 2.99,
      stock: 50,
      category: "Fruits",
      image: "🍌"
    },
    {
      id: 2,
      shop_id: 1,
      name: "Organic Milk",
      price: 4.50,
      stock: 25,
      category: "Dairy",
      image: "🥛"
    },
    {
      id: 3,
      shop_id: 1,
      name: "Whole Wheat Bread",
      price: 3.25,
      stock: 15,
      category: "Bakery",
      image: "🍞"
    },
    {
      id: 4,
      shop_id: 2,
      name: "Pain Relief Tablets",
      price: 8.99,
      stock: 100,
      category: "Medicine",
      image: "💊"
    },
    {
      id: 5,
      shop_id: 2,
      name: "Vitamin C Supplements",
      price: 15.99,
      stock: 75,
      category: "Supplements",
      image: "🧴"
    },
    {
      id: 6,
      shop_id: 2,
      name: "Digital Thermometer",
      price: 12.50,
      stock: 30,
      category: "Medical Devices",
      image: "🌡️"
    },
    {
      id: 7,
      shop_id: 3,
      name: "Margherita Pizza",
      price: 14.99,
      stock: 20,
      category: "Pizza",
      image: "🍕"
    },
    {
      id: 8,
      shop_id: 3,
      name: "Caesar Salad",
      price: 9.99,
      stock: 15,
      category: "Salads",
      image: "🥗"
    },
    {
      id: 9,
      shop_id: 3,
      name: "Chicken Burger",
      price: 12.50,
      stock: 25,
      category: "Burgers",
      image: "🍔"
    },
    {
      id: 10,
      shop_id: 4,
      name: "Wireless Earbuds",
      price: 79.99,
      stock: 40,
      category: "Audio",
      image: "🎧"
    },
    {
      id: 11,
      shop_id: 4,
      name: "Phone Charger",
      price: 19.99,
      stock: 60,
      category: "Accessories",
      image: "🔌"
    },
    {
      id: 12,
      shop_id: 4,
      name: "Bluetooth Speaker",
      price: 45.99,
      stock: 20,
      category: "Audio",
      image: "🔊"
    }
  ],
  users: [
    {
      id: 1,
      name: "John Customer",
      email: "customer@demo.com",
      phone: "+1234567890",
      role: "customer",
      password: "demo123"
    },
    {
      id: 2,
      name: "Alice Shop Owner",
      email: "grocery@demo.com",
      phone: "+1234567891",
      role: "shop_owner",
      password: "demo123"
    },
    {
      id: 3,
      name: "Bob Pharmacy Owner",
      email: "pharmacy@demo.com",
      phone: "+1234567892",
      role: "shop_owner",
      password: "demo123"
    },
    {
      id: 4,
      name: "Carol Restaurant Owner",
      email: "restaurant@demo.com",
      phone: "+1234567893",
      role: "shop_owner",
      password: "demo123"
    },
    {
      id: 5,
      name: "Dave Electronics Owner",
      email: "electronics@demo.com",
      phone: "+1234567894",
      role: "shop_owner",
      password: "demo123"
    },
    {
      id: 6,
      name: "Mike Delivery",
      email: "delivery1@demo.com",
      phone: "+1234567895",
      role: "delivery_partner",
      password: "demo123"
    },
    {
      id: 7,
      name: "Sarah Delivery",
      email: "delivery2@demo.com",
      phone: "+1234567896",
      role: "delivery_partner",
      password: "demo123"
    },
    {
      id: 8,
      name: "Admin User",
      email: "admin@demo.com",
      phone: "+1234567897",
      role: "admin",
      password: "admin123"
    }
  ],
  delivery_partners: [
    {
      id: 1,
      user_id: 6,
      vehicle_type: "Motorcycle",
      status: "available",
      current_location: "Downtown Area",
      rating: 4.8,
      total_deliveries: 245
    },
    {
      id: 2,
      user_id: 7,
      vehicle_type: "Bicycle",
      status: "busy",
      current_location: "Uptown District",
      rating: 4.6,
      total_deliveries: 189
    }
  ],
  orders: [
    {
      id: 1001,
      shop_id: 1,
      customer_id: 1,
      items: [
        {product_id: 1, quantity: 3, price: 2.99},
        {product_id: 2, quantity: 1, price: 4.50}
      ],
      total: 13.47,
      status: "delivered",
      created_at: "2025-09-05T14:30:00",
      delivery_partner_id: 1
    },
    {
      id: 1002,
      shop_id: 3,
      customer_id: 1,
      items: [
        {product_id: 7, quantity: 1, price: 14.99},
        {product_id: 8, quantity: 1, price: 9.99}
      ],
      total: 24.98,
      status: "in_transit",
      created_at: "2025-09-06T18:15:00",
      delivery_partner_id: 2
    }
  ]
};

// Application State
let appState = {
  currentUser: null,
  currentRole: null,
  selectedShop: null,
  cart: {},
  productIdCounter: 13,
  orderIdCounter: 1003
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Setup event listeners
  setupEventListeners();
  
  // Show landing page
  showPage('landing-page');
  
  // Start real-time updates simulation
  startRealTimeUpdates();
}

function setupEventListeners() {
  // Landing page role selection - Fixed
  const roleCards = document.querySelectorAll('.role-card');
  roleCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const role = this.dataset.role;
      console.log('Role selected:', role);
      appState.currentRole = role;
      showPage('login-page');
      updateAuthTitle(role);
    });
  });

  // Back to landing - Fixed
  const backBtn = document.getElementById('back-to-landing');
  if (backBtn) {
    backBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showPage('landing-page');
      appState.currentRole = null;
    });
  }

  // Auth form toggle - Fixed
  const toggleRegister = document.getElementById('toggle-register');
  if (toggleRegister) {
    toggleRegister.addEventListener('click', function(e) {
      e.preventDefault();
      toggleAuthMode();
    });
  }

  // Auth form submission - Fixed
  const authForm = document.getElementById('auth-form');
  if (authForm) {
    authForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Form submitted');
      handleAuth(e);
    });
  }

  // Navigation
  setupNavigation();

  // Logout buttons - Fixed
  const logoutBtns = ['customer-logout', 'shop-logout', 'delivery-logout', 'admin-logout'];
  logoutBtns.forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', logout);
    }
  });

  // Product modal
  setupProductModal();
  
  // Cart and checkout - Fixed
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', checkout);
  }
  
  // Shop navigation - Fixed
  const backToShopsBtn = document.getElementById('back-to-shops');
  if (backToShopsBtn) {
    backToShopsBtn.addEventListener('click', function() {
      showDashboardSection('customer-shops');
      appState.selectedShop = null;
    });
  }
}

function setupNavigation() {
  // Customer navigation
  const customerNavItems = document.querySelectorAll('#customer-dashboard .nav-item');
  customerNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      setActiveNavItem(this);
      
      if (section === 'shops') {
        showDashboardSection('customer-shops');
        renderShops();
      } else if (section === 'cart') {
        showDashboardSection('customer-cart');
        renderCart();
      } else if (section === 'orders') {
        showDashboardSection('customer-orders');
        renderCustomerOrders();
      } else if (section === 'profile') {
        showDashboardSection('customer-profile');
        renderCustomerProfile();
      }
    });
  });

  // Shop owner navigation
  const shopNavItems = document.querySelectorAll('#shop-dashboard .nav-item');
  shopNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      setActiveNavItem(this);
      
      if (section === 'shop-overview') {
        showDashboardSection('shop-overview');
        renderShopOverview();
      } else if (section === 'shop-products') {
        showDashboardSection('shop-products');
        renderShopProducts();
      } else if (section === 'shop-orders') {
        showDashboardSection('shop-orders');
        renderShopOrders();
      } else if (section === 'shop-reports') {
        showDashboardSection('shop-reports');
        renderShopReports();
      }
    });
  });

  // Delivery partner navigation
  const deliveryNavItems = document.querySelectorAll('#delivery-dashboard .nav-item');
  deliveryNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      setActiveNavItem(this);
      
      if (section === 'delivery-overview') {
        showDashboardSection('delivery-overview');
        renderDeliveryOverview();
      } else if (section === 'available-orders') {
        showDashboardSection('available-orders');
        renderAvailableOrders();
      } else if (section === 'my-deliveries') {
        showDashboardSection('my-deliveries');
        renderMyDeliveries();
      } else if (section === 'delivery-history') {
        showDashboardSection('delivery-history');
        renderDeliveryHistory();
      }
    });
  });

  // Admin navigation
  const adminNavItems = document.querySelectorAll('#admin-dashboard .nav-item');
  adminNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      setActiveNavItem(this);
      
      if (section === 'admin-overview') {
        showDashboardSection('admin-overview');
        renderAdminOverview();
      } else if (section === 'admin-users') {
        showDashboardSection('admin-users');
        renderAdminUsers();
      } else if (section === 'admin-shops') {
        showDashboardSection('admin-shops');
        renderAdminShops();
      } else if (section === 'admin-analytics') {
        showDashboardSection('admin-analytics');
        renderAdminAnalytics();
      }
    });
  });
}

function setActiveNavItem(activeItem) {
  const container = activeItem.closest('.dashboard');
  if (container) {
    const navItems = container.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    activeItem.classList.add('active');
  }
}

function showPage(pageId) {
  console.log('Showing page:', pageId);
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

function showDashboardSection(sectionId) {
  const dashboard = document.querySelector('.dashboard.active');
  if (dashboard) {
    dashboard.querySelectorAll('.dashboard-section').forEach(section => {
      section.classList.remove('active');
    });
    const targetSection = dashboard.querySelector(`#${sectionId}`);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }
}

function updateAuthTitle(role) {
  const titles = {
    customer: 'Customer Sign In',
    shop_owner: 'Shop Owner Sign In',
    delivery_partner: 'Delivery Partner Sign In',
    admin: 'Admin Sign In'
  };
  const titleElement = document.getElementById('auth-title');
  if (titleElement) {
    titleElement.textContent = titles[role];
  }
}

function toggleAuthMode() {
  const form = document.getElementById('auth-form');
  const toggle = document.getElementById('toggle-register');
  const registerFields = document.getElementById('register-fields');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  if (registerFields.classList.contains('visible')) {
    // Switch to login
    registerFields.classList.remove('visible');
    registerFields.classList.add('hidden');
    submitBtn.textContent = 'Sign In';
    toggle.textContent = 'Register here';
    toggle.previousElementSibling.textContent = "Don't have an account? ";
  } else {
    // Switch to register
    registerFields.classList.remove('hidden');
    registerFields.classList.add('visible');
    submitBtn.textContent = 'Register';
    toggle.textContent = 'Sign in here';
    toggle.previousElementSibling.textContent = "Already have an account? ";
  }
}

function handleAuth(e) {
  e.preventDefault();
  console.log('Handling auth...');
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const isRegister = document.getElementById('register-fields').classList.contains('visible');
  
  console.log('Email:', email, 'Password:', password, 'Is Register:', isRegister, 'Role:', appState.currentRole);
  
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }
  
  if (isRegister) {
    // Handle registration
    const name = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!name || !phone) {
      alert('Please fill in all fields');
      return;
    }
    
    const newUser = {
      id: appData.users.length + 1,
      name: name,
      email: email,
      phone: phone,
      role: appState.currentRole,
      password: password
    };
    
    appData.users.push(newUser);
    appState.currentUser = newUser;
    console.log('User registered:', newUser);
  } else {
    // Handle login
    const user = appData.users.find(u => u.email === email && u.password === password);
    console.log('Found user:', user);
    
    if (!user) {
      alert('Invalid email or password');
      return;
    }
    
    if (user.role !== appState.currentRole) {
      alert('Role mismatch. Please select the correct role.');
      return;
    }
    
    appState.currentUser = user;
    console.log('User logged in:', user);
  }
  
  // Navigate to appropriate dashboard
  navigateToDashboard();
}

function navigateToDashboard() {
  const role = appState.currentUser.role;
  console.log('Navigating to dashboard for role:', role);
  
  switch(role) {
    case 'customer':
      showPage('customer-dashboard');
      renderShops();
      break;
    case 'shop_owner':
      showPage('shop-dashboard');
      renderShopOverview();
      break;
    case 'delivery_partner':
      showPage('delivery-dashboard');
      renderDeliveryOverview();
      break;
    case 'admin':
      showPage('admin-dashboard');
      renderAdminOverview();
      break;
  }
}

function logout() {
  appState.currentUser = null;
  appState.currentRole = null;
  appState.selectedShop = null;
  appState.cart = {};
  showPage('landing-page');
  
  // Reset auth form
  const authForm = document.getElementById('auth-form');
  if (authForm) {
    authForm.reset();
  }
  
  const registerFields = document.getElementById('register-fields');
  if (registerFields) {
    registerFields.classList.remove('visible');
    registerFields.classList.add('hidden');
  }
  
  const submitBtn = document.querySelector('#auth-form button[type="submit"]');
  if (submitBtn) {
    submitBtn.textContent = 'Sign In';
  }
}

// Customer Functions
function renderShops() {
  const container = document.getElementById('shops-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.shops.forEach(shop => {
    const shopCard = document.createElement('div');
    shopCard.className = 'shop-card';
    shopCard.innerHTML = `
      <div class="shop-icon">${shop.image}</div>
      <h3>${shop.name}</h3>
      <div class="shop-category">${shop.category}</div>
      <div class="shop-address">📍 ${shop.address}</div>
      <div class="shop-hours">🕒 ${shop.business_hours}</div>
    `;
    
    shopCard.addEventListener('click', () => {
      appState.selectedShop = shop;
      showDashboardSection('shop-detail');
      renderShopDetail(shop);
    });
    
    container.appendChild(shopCard);
  });
}

function renderShopDetail(shop) {
  const shopInfo = document.getElementById('shop-info');
  if (!shopInfo) return;
  
  shopInfo.innerHTML = `
    <div class="shop-icon">${shop.image}</div>
    <h2>${shop.name}</h2>
    <div class="shop-category">${shop.category}</div>
    <div class="shop-address">📍 ${shop.address}</div>
    <div class="shop-hours">🕒 ${shop.business_hours}</div>
  `;
  
  renderShopProductsForCustomer(shop.id);
}

function renderShopProductsForCustomer(shopId) {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  const products = appData.products.filter(p => p.shop_id === shopId);
  console.log('Rendering products for shop', shopId, ':', products);
  
  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <p>No products available</p>
      </div>
    `;
    return;
  }
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const cartItem = appState.cart[product.id];
    const quantity = cartItem ? cartItem.quantity : 0;
    
    productCard.innerHTML = `
      <div class="product-icon">${product.image}</div>
      <h4>${product.name}</h4>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <div class="product-category">${product.category}</div>
      <div class="product-stock">Stock: ${product.stock}</div>
      <div class="product-actions">
        <div class="quantity-control">
          <button class="quantity-btn minus-btn" data-product-id="${product.id}">−</button>
          <span class="quantity-display">${quantity}</span>
          <button class="quantity-btn plus-btn" data-product-id="${product.id}">+</button>
        </div>
      </div>
    `;
    
    // Add event listeners to quantity buttons
    const minusBtn = productCard.querySelector('.minus-btn');
    const plusBtn = productCard.querySelector('.plus-btn');
    
    if (minusBtn && plusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateCartQuantity(product.id, quantity - 1);
      });
      
      plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateCartQuantity(product.id, quantity + 1);
      });
    }
    
    container.appendChild(productCard);
  });
}

function updateCartQuantity(productId, newQuantity) {
  console.log('Updating cart quantity for product', productId, 'to', newQuantity);
  
  if (newQuantity <= 0) {
    delete appState.cart[productId];
  } else {
    const product = appData.products.find(p => p.id === productId);
    if (product && newQuantity <= product.stock) {
      appState.cart[productId] = {
        product: product,
        quantity: newQuantity
      };
    }
  }
  
  updateCartBadge();
  
  // Re-render current view if we're in shop detail
  if (appState.selectedShop) {
    renderShopProductsForCustomer(appState.selectedShop.id);
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  
  const totalItems = Object.values(appState.cart).reduce((sum, item) => sum + item.quantity, 0);
  
  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalContainer = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (!container || !totalContainer || !checkoutBtn) return;
  
  const cartItems = Object.values(appState.cart);
  
  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>
    `;
    totalContainer.innerHTML = '';
    checkoutBtn.classList.add('hidden');
    return;
  }
  
  container.innerHTML = '';
  let subtotal = 0;
  
  cartItems.forEach(item => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-icon">${item.product.image}</div>
        <div class="cart-item-details">
          <h4>${item.product.name}</h4>
          <p>Quantity: ${item.quantity}</p>
        </div>
      </div>
      <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
    `;
    
    container.appendChild(cartItem);
  });
  
  const tax = subtotal * 0.08;
  const deliveryFee = 2.99;
  const total = subtotal + tax + deliveryFee;
  
  totalContainer.innerHTML = `
    <div class="total-row">
      <span>Subtotal:</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="total-row">
      <span>Tax (8%):</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="total-row">
      <span>Delivery Fee:</span>
      <span>$${deliveryFee.toFixed(2)}</span>
    </div>
    <div class="total-row final">
      <span>Total:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;
  
  checkoutBtn.classList.remove('hidden');
}

function checkout() {
  if (Object.keys(appState.cart).length === 0) {
    alert('Your cart is empty');
    return;
  }
  
  // Group cart items by shop
  const ordersByShop = {};
  Object.values(appState.cart).forEach(item => {
    const shopId = item.product.shop_id;
    if (!ordersByShop[shopId]) {
      ordersByShop[shopId] = [];
    }
    ordersByShop[shopId].push({
      product_id: item.product.id,
      quantity: item.quantity,
      price: item.product.price
    });
  });
  
  // Create orders for each shop
  Object.keys(ordersByShop).forEach(shopId => {
    const items = ordersByShop[shopId];
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const order = {
      id: appState.orderIdCounter++,
      shop_id: parseInt(shopId),
      customer_id: appState.currentUser.id,
      items: items,
      total: total,
      status: 'new',
      created_at: new Date().toISOString()
    };
    
    appData.orders.push(order);
    
    // Update product stock
    items.forEach(item => {
      const product = appData.products.find(p => p.id === item.product_id);
      if (product) {
        product.stock -= item.quantity;
      }
    });
  });
  
  // Clear cart
  appState.cart = {};
  updateCartBadge();
  
  alert('Order placed successfully!');
  showDashboardSection('customer-orders');
  renderCustomerOrders();
}

function renderCustomerOrders() {
  const container = document.getElementById('orders-list');
  if (!container) return;
  
  const customerOrders = appData.orders.filter(o => o.customer_id === appState.currentUser.id);
  
  if (customerOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <p>No orders yet</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  customerOrders.reverse().forEach(order => {
    const shop = appData.shops.find(s => s.id === order.shop_id);
    const orderCard = document.createElement('div');
    orderCard.className = 'order-card';
    
    const itemsList = order.items.map(item => {
      const product = appData.products.find(p => p.id === item.product_id);
      return `${product ? product.name : 'Unknown Product'} x${item.quantity}`;
    }).join(', ');
    
    orderCard.innerHTML = `
      <div class="order-header">
        <div class="order-info">
          <h4>Order #${order.id}</h4>
          <p>Shop: ${shop ? shop.name : 'Unknown Shop'}</p>
          <p>Date: ${new Date(order.created_at).toLocaleDateString()}</p>
          <p>Items: ${itemsList}</p>
        </div>
        <div>
          <div class="status status--${order.status}">${formatStatus(order.status)}</div>
          <div style="margin-top: 8px; font-weight: 600;">$${order.total.toFixed(2)}</div>
        </div>
      </div>
    `;
    
    container.appendChild(orderCard);
  });
}

function renderCustomerProfile() {
  const container = document.querySelector('#customer-profile .profile-info');
  if (!container) return;
  
  container.innerHTML = `
    <h3>Profile Information</h3>
    <p><strong>Name:</strong> ${appState.currentUser.name}</p>
    <p><strong>Email:</strong> ${appState.currentUser.email}</p>
    <p><strong>Phone:</strong> ${appState.currentUser.phone}</p>
    <p><strong>Role:</strong> Customer</p>
  `;
}

// Shop Owner Functions
function renderShopOverview() {
  const userShop = appData.shops.find(s => s.owner_id === appState.currentUser.id);
  if (!userShop) return;
  
  const shopProducts = appData.products.filter(p => p.shop_id === userShop.id);
  const shopOrders = appData.orders.filter(o => o.shop_id === userShop.id);
  const pendingOrders = shopOrders.filter(o => o.status === 'new');
  const completedOrders = shopOrders.filter(o => o.status === 'delivered');
  const totalRevenue = completedOrders.reduce((sum, order) => sum + order.total, 0);
  
  const totalProductsEl = document.getElementById('total-products');
  const pendingOrdersEl = document.getElementById('pending-orders');
  const completedOrdersEl = document.getElementById('completed-orders');
  const totalRevenueEl = document.getElementById('total-revenue');
  
  if (totalProductsEl) totalProductsEl.textContent = shopProducts.length;
  if (pendingOrdersEl) pendingOrdersEl.textContent = pendingOrders.length;
  if (completedOrdersEl) completedOrdersEl.textContent = completedOrders.length;
  if (totalRevenueEl) totalRevenueEl.textContent = `$${totalRevenue.toFixed(2)}`;
  
  renderRecentOrders(shopOrders.slice(-5));
}

function renderRecentOrders(orders) {
  const container = document.getElementById('recent-orders-list');
  if (!container) return;
  
  if (orders.length === 0) {
    container.innerHTML = '<p>No recent orders</p>';
    return;
  }
  
  container.innerHTML = '';
  orders.reverse().forEach(order => {
    const customer = appData.users.find(u => u.id === order.customer_id);
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-card';
    orderDiv.innerHTML = `
      <div class="order-header">
        <div class="order-info">
          <h4>Order #${order.id}</h4>
          <p>Customer: ${customer ? customer.name : 'Unknown'}</p>
          <p>Date: ${new Date(order.created_at).toLocaleDateString()}</p>
        </div>
        <div>
          <div class="status status--${order.status}">${formatStatus(order.status)}</div>
          <div style="margin-top: 8px; font-weight: 600;">$${order.total.toFixed(2)}</div>
        </div>
      </div>
    `;
    container.appendChild(orderDiv);
  });
}

function renderShopProducts() {
  const container = document.getElementById('shop-products-list');
  if (!container) return;
  
  const userShop = appData.shops.find(s => s.owner_id === appState.currentUser.id);
  if (!userShop) return;
  
  const shopProducts = appData.products.filter(p => p.shop_id === userShop.id);
  
  container.innerHTML = '';
  
  shopProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-list-item';
    productDiv.innerHTML = `
      <div class="product-list-info">
        <div class="product-list-icon">${product.image}</div>
        <div class="product-list-details">
          <h4>${product.name}</h4>
          <p>Price: $${product.price.toFixed(2)}</p>
          <p>Stock: ${product.stock}</p>
          <p>Category: ${product.category}</p>
        </div>
      </div>
      <div class="product-list-actions">
        <button class="btn btn--outline btn--sm edit-product-btn" data-product-id="${product.id}">Edit</button>
        <button class="btn btn--outline btn--sm delete-product-btn" data-product-id="${product.id}">Delete</button>
      </div>
    `;
    
    // Add event listeners for edit and delete buttons
    const editBtn = productDiv.querySelector('.edit-product-btn');
    const deleteBtn = productDiv.querySelector('.delete-product-btn');
    
    if (editBtn) editBtn.addEventListener('click', () => editProduct(product.id));
    if (deleteBtn) deleteBtn.addEventListener('click', () => deleteProduct(product.id));
    
    container.appendChild(productDiv);
  });
}

function renderShopOrders() {
  const container = document.getElementById('shop-orders-list');
  if (!container) return;
  
  const userShop = appData.shops.find(s => s.owner_id === appState.currentUser.id);
  if (!userShop) return;
  
  const shopOrders = appData.orders.filter(o => o.shop_id === userShop.id);
  
  if (shopOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <p>No orders yet</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  shopOrders.reverse().forEach(order => {
    const customer = appData.users.find(u => u.id === order.customer_id);
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-card';
    
    const itemsList = order.items.map(item => {
      const product = appData.products.find(p => p.id === item.product_id);
      return `${product ? product.name : 'Unknown'} x${item.quantity}`;
    }).join(', ');
    
    orderDiv.innerHTML = `
      <div class="order-header">
        <div class="order-info">
          <h4>Order #${order.id}</h4>
          <p>Customer: ${customer ? customer.name : 'Unknown'}</p>
          <p>Date: ${new Date(order.created_at).toLocaleDateString()}</p>
          <p>Items: ${itemsList}</p>
        </div>
        <div>
          <div class="status status--${order.status}">${formatStatus(order.status)}</div>
          <div style="margin-top: 8px; font-weight: 600;">$${order.total.toFixed(2)}</div>
        </div>
      </div>
      <div class="order-actions">
        ${order.status === 'new' ? `<button class="btn btn--primary btn--sm accept-order-btn" data-order-id="${order.id}">Accept Order</button>` : ''}
        ${order.status === 'accepted' ? `<button class="btn btn--primary btn--sm assign-delivery-btn" data-order-id="${order.id}">Assign Delivery</button>` : ''}
      </div>
    `;
    
    // Add event listeners for action buttons
    const acceptBtn = orderDiv.querySelector('.accept-order-btn');
    const assignBtn = orderDiv.querySelector('.assign-delivery-btn');
    
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => acceptOrder(order.id));
    }
    
    if (assignBtn) {
      assignBtn.addEventListener('click', () => assignDelivery(order.id));
    }
    
    container.appendChild(orderDiv);
  });
}

function acceptOrder(orderId) {
  const order = appData.orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'accepted';
    renderShopOrders();
    renderShopOverview();
  }
}

function assignDelivery(orderId) {
  const availablePartners = appData.delivery_partners.filter(p => p.status === 'available');
  
  if (availablePartners.length === 0) {
    alert('No delivery partners available');
    return;
  }
  
  const order = appData.orders.find(o => o.id === orderId);
  if (order) {
    const partner = availablePartners[0];
    order.delivery_partner_id = partner.id;
    order.status = 'dispatched';
    partner.status = 'busy';
    
    renderShopOrders();
    renderShopOverview();
    
    // Simulate delivery completion after 30 seconds
    setTimeout(() => {
      order.status = 'delivered';
      partner.status = 'available';
    }, 30000);
  }
}

function renderShopReports() {
  const userShop = appData.shops.find(s => s.owner_id === appState.currentUser.id);
  if (!userShop) return;
  
  const shopOrders = appData.orders.filter(o => o.shop_id === userShop.id);
  const completedOrders = shopOrders.filter(o => o.status === 'delivered');
  
  // Create sample sales data
  const salesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Daily Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#1FB8CD',
      borderColor: '#1FB8CD',
      tension: 0.1
    }]
  };
  
  const ctx = document.getElementById('sales-chart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: salesData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

// Delivery Partner Functions
function renderDeliveryOverview() {
  const partner = appData.delivery_partners.find(p => p.user_id === appState.currentUser.id);
  if (!partner) return;
  
  const ratingEl = document.getElementById('delivery-rating');
  const totalDeliveriesEl = document.getElementById('total-deliveries-count');
  const activeDeliveriesEl = document.getElementById('active-deliveries');
  
  if (ratingEl) ratingEl.textContent = partner.rating;
  if (totalDeliveriesEl) totalDeliveriesEl.textContent = partner.total_deliveries;
  
  const activeDeliveries = appData.orders.filter(o => o.delivery_partner_id === partner.id && o.status !== 'delivered');
  if (activeDeliveriesEl) activeDeliveriesEl.textContent = activeDeliveries.length;
}

function renderAvailableOrders() {
  const container = document.getElementById('available-deliveries-list');
  if (!container) return;
  
  const partner = appData.delivery_partners.find(p => p.user_id === appState.currentUser.id);
  if (!partner) return;
  
  const availableOrders = appData.orders.filter(o => o.status === 'accepted' && !o.delivery_partner_id);
  
  if (availableOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <p>No available deliveries</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  availableOrders.forEach(order => {
    const shop = appData.shops.find(s => s.id === order.shop_id);
    const customer = appData.users.find(u => u.id === order.customer_id);
    
    const deliveryDiv = document.createElement('div');
    deliveryDiv.className = 'delivery-card';
    deliveryDiv.innerHTML = `
      <div class="delivery-header">
        <div class="delivery-info">
          <h4>Order #${order.id}</h4>
          <p>Shop: ${shop ? shop.name : 'Unknown'}</p>
          <p>Customer: ${customer ? customer.name : 'Unknown'}</p>
          <p>Total: $${order.total.toFixed(2)}</p>
          <p>Distance: ~2.5 km</p>
        </div>
        <div>
          <div class="status status--${order.status}">${formatStatus(order.status)}</div>
        </div>
      </div>
      <div class="delivery-actions">
        <button class="btn btn--primary btn--sm accept-delivery-btn" data-order-id="${order.id}">Accept Delivery</button>
      </div>
    `;
    
    // Add event listener for accept button
    const acceptBtn = deliveryDiv.querySelector('.accept-delivery-btn');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => acceptDelivery(order.id));
    }
    
    container.appendChild(deliveryDiv);
  });
}

function acceptDelivery(orderId) {
  const partner = appData.delivery_partners.find(p => p.user_id === appState.currentUser.id);
  const order = appData.orders.find(o => o.id === orderId);
  
  if (partner && order) {
    order.delivery_partner_id = partner.id;
    order.status = 'dispatched';
    partner.status = 'busy';
    
    renderAvailableOrders();
    renderMyDeliveries();
  }
}

function renderMyDeliveries() {
  const container = document.getElementById('current-deliveries-list');
  if (!container) return;
  
  const partner = appData.delivery_partners.find(p => p.user_id === appState.currentUser.id);
  if (!partner) return;
  
  const myDeliveries = appData.orders.filter(o => o.delivery_partner_id === partner.id && o.status !== 'delivered');
  
  if (myDeliveries.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🚴</div>
        <p>No active deliveries</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  myDeliveries.forEach(order => {
    const shop = appData.shops.find(s => s.id === order.shop_id);
    const customer = appData.users.find(u => u.id === order.customer_id);
    
    const deliveryDiv = document.createElement('div');
    deliveryDiv.className = 'delivery-card';
    deliveryDiv.innerHTML = `
      <div class="delivery-header">
        <div class="delivery-info">
          <h4>Order #${order.id}</h4>
          <p>Shop: ${shop ? shop.name : 'Unknown'}</p>
          <p>Customer: ${customer ? customer.name : 'Unknown'}</p>
          <p>Total: $${order.total.toFixed(2)}</p>
        </div>
        <div>
          <div class="status status--${order.status}">${formatStatus(order.status)}</div>
        </div>
      </div>
      <div class="delivery-actions">
        ${order.status === 'dispatched' ? `<button class="btn btn--success btn--sm complete-delivery-btn" data-order-id="${order.id}">Mark Delivered</button>` : ''}
      </div>
    `;
    
    // Add event listener for complete button
    const completeBtn = deliveryDiv.querySelector('.complete-delivery-btn');
    if (completeBtn) {
      completeBtn.addEventListener('click', () => completeDelivery(order.id));
    }
    
    container.appendChild(deliveryDiv);
  });
}

function completeDelivery(orderId) {
  const partner = appData.delivery_partners.find(p => p.user_id === appState.currentUser.id);
  const order = appData.orders.find(o => o.id === orderId);
  
  if (partner && order) {
    order.status = 'delivered';
    partner.status = 'available';
    partner.total_deliveries++;
    
    renderMyDeliveries();
    renderDeliveryHistory();
    renderDeliveryOverview();
  }
}

function renderDeliveryHistory() {
  const container = document.getElementById('delivery-history-list');
  if (!container) return;
  
  const partner = appData.delivery_partners.find(p => p.user_id === appState.currentUser.id);
  if (!partner) return;
  
  const completedDeliveries = appData.orders.filter(o => o.delivery_partner_id === partner.id && o.status === 'delivered');
  
  if (completedDeliveries.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>No completed deliveries</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  completedDeliveries.reverse().forEach(order => {
    const shop = appData.shops.find(s => s.id === order.shop_id);
    const customer = appData.users.find(u => u.id === order.customer_id);
    
    const deliveryDiv = document.createElement('div');
    deliveryDiv.className = 'delivery-card';
    deliveryDiv.innerHTML = `
      <div class="delivery-header">
        <div class="delivery-info">
          <h4>Order #${order.id}</h4>
          <p>Shop: ${shop ? shop.name : 'Unknown'}</p>
          <p>Customer: ${customer ? customer.name : 'Unknown'}</p>
          <p>Completed: ${new Date(order.created_at).toLocaleDateString()}</p>
          <p>Earnings: $${(order.total * 0.15).toFixed(2)}</p>
        </div>
        <div>
          <div class="status status--${order.status}">${formatStatus(order.status)}</div>
        </div>
      </div>
    `;
    
    container.appendChild(deliveryDiv);
  });
}

// Admin Functions
function renderAdminOverview() {
  const totalUsersEl = document.getElementById('total-users');
  const totalShopsEl = document.getElementById('total-shops');
  const totalOrdersEl = document.getElementById('total-orders');
  const platformRevenueEl = document.getElementById('platform-revenue');
  
  if (totalUsersEl) totalUsersEl.textContent = appData.users.length;
  if (totalShopsEl) totalShopsEl.textContent = appData.shops.length;
  if (totalOrdersEl) totalOrdersEl.textContent = appData.orders.length;
  
  const totalRevenue = appData.orders.filter(o => o.status === 'delivered').reduce((sum, order) => sum + order.total, 0);
  if (platformRevenueEl) platformRevenueEl.textContent = `$${totalRevenue.toFixed(2)}`;
}

function renderAdminUsers() {
  const container = document.getElementById('users-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-card';
    userDiv.innerHTML = `
      <div class="user-info">
        <h4>${user.name}</h4>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <span class="user-role ${user.role}">${user.role.replace('_', ' ')}</span>
      </div>
      <div>
        <button class="btn btn--outline btn--sm">Manage</button>
      </div>
    `;
    container.appendChild(userDiv);
  });
}

function renderAdminShops() {
  const container = document.getElementById('admin-shops-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.shops.forEach(shop => {
    const owner = appData.users.find(u => u.id === shop.owner_id);
    const shopDiv = document.createElement('div');
    shopDiv.className = 'shop-card';
    shopDiv.innerHTML = `
      <div class="shop-icon">${shop.image}</div>
      <h3>${shop.name}</h3>
      <div class="shop-category">${shop.category}</div>
      <div class="shop-address">📍 ${shop.address}</div>
      <div class="shop-hours">🕒 ${shop.business_hours}</div>
      <p>Owner: ${owner ? owner.name : 'Unknown'}</p>
      <button class="btn btn--outline btn--sm">Manage</button>
    `;
    container.appendChild(shopDiv);
  });
}

function renderAdminAnalytics() {
  // Create sample analytics data
  const analyticsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Orders',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#1FB8CD'
    }, {
      label: 'Revenue',
      data: [200, 300, 150, 250, 100, 180],
      backgroundColor: '#FFC185'
    }]
  };
  
  const ctx = document.getElementById('platform-chart');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: analyticsData,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

// Product Modal Functions
function setupProductModal() {
  const modal = document.getElementById('product-modal');
  const form = document.getElementById('product-form');
  const addBtn = document.getElementById('add-product-btn');
  const closeBtn = document.getElementById('close-product-modal');
  const cancelBtn = document.getElementById('cancel-product');
  
  if (!modal || !form) return;
  
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const titleEl = document.getElementById('product-modal-title');
      if (titleEl) titleEl.textContent = 'Add Product';
      form.reset();
      form.dataset.mode = 'add';
      modal.classList.remove('hidden');
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
  
  form.addEventListener('submit', handleProductForm);
}

function handleProductForm(e) {
  e.preventDefault();
  
  const form = e.target;
  const userShop = appData.shops.find(s => s.owner_id === appState.currentUser.id);
  if (!userShop) return;
  
  const productData = {
    name: document.getElementById('product-name').value,
    price: parseFloat(document.getElementById('product-price').value),
    stock: parseInt(document.getElementById('product-stock').value),
    category: document.getElementById('product-category').value,
    image: document.getElementById('product-image').value || '📦'
  };
  
  if (form.dataset.mode === 'add') {
    const newProduct = {
      id: appState.productIdCounter++,
      shop_id: userShop.id,
      ...productData
    };
    appData.products.push(newProduct);
  } else if (form.dataset.mode === 'edit') {
    const productId = parseInt(form.dataset.productId);
    const product = appData.products.find(p => p.id === productId);
    if (product) {
      Object.assign(product, productData);
    }
  }
  
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.add('hidden');
  
  renderShopProducts();
  renderShopOverview();
}

function editProduct(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const titleEl = document.getElementById('product-modal-title');
  if (titleEl) titleEl.textContent = 'Edit Product';
  
  document.getElementById('product-name').value = product.name;
  document.getElementById('product-price').value = product.price;
  document.getElementById('product-stock').value = product.stock;
  document.getElementById('product-category').value = product.category;
  document.getElementById('product-image').value = product.image;
  
  const form = document.getElementById('product-form');
  form.dataset.mode = 'edit';
  form.dataset.productId = productId;
  
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('hidden');
}

function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    const index = appData.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      appData.products.splice(index, 1);
      renderShopProducts();
      renderShopOverview();
    }
  }
}

// Utility Functions
function formatStatus(status) {
  const statusMap = {
    new: 'New',
    accepted: 'Accepted',
    dispatched: 'Dispatched',
    delivered: 'Delivered',
    in_transit: 'In Transit'
  };
  return statusMap[status] || status;
}

function startRealTimeUpdates() {
  // Simulate real-time order status updates
  setInterval(() => {
    const inTransitOrders = appData.orders.filter(o => o.status === 'in_transit');
    inTransitOrders.forEach(order => {
      if (Math.random() < 0.1) { // 10% chance per interval
        order.status = 'delivered';
        const partner = appData.delivery_partners.find(p => p.id === order.delivery_partner_id);
        if (partner) {
          partner.status = 'available';
        }
      }
    });
  }, 10000); // Check every 10 seconds
}