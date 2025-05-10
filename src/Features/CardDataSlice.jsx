import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadFromLocalStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
};

export const dataFetch = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/women's clothing");
    let data = await res.json();
    return data;
  }
);

const initialState = {
  status: 'idle',
  list: loadFromLocalStorage('product_list', []),
  filteredList: [], // Add filteredList to store search results
  selectedProduct: null,
  wishlist: loadFromLocalStorage('wishlist', []),
  addtocart: loadFromLocalStorage('addtocart', []),
  searchTerm: '',
  error: null
};

const CardDataSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    findProductById: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.list.find(product => product.id === productId);
    },
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(item => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
        saveToLocalStorage('wishlist', state.wishlist);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      saveToLocalStorage('wishlist', state.wishlist);
    },
    addToCart: (state, action) => {
      const existingItem = state.addtocart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.addtocart.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage('addtocart', state.addtocart);
    },
    removeFromCart: (state, action) => {
      state.addtocart = state.addtocart.filter(item => item.id !== action.payload);
      saveToLocalStorage('addtocart', state.addtocart);
    },
    incrementQuantity: (state, action) => {
      const item = state.addtocart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        saveToLocalStorage('addtocart', state.addtocart);
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.addtocart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveToLocalStorage('addtocart', state.addtocart);
      }
    },
    clearCart: (state) => {
      state.addtocart = [];
      saveToLocalStorage('addtocart', []);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      if (action.payload.trim() === '') {
        state.filteredList = [];
      } else {
        state.filteredList = state.list.filter(product =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.filteredList = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(dataFetch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
        saveToLocalStorage('product_list', action.payload);
      })
      .addCase(dataFetch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {
  findProductById,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  setSearchTerm,
  clearSearch
} = CardDataSlice.actions;

export default CardDataSlice.reducer;