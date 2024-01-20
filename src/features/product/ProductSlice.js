import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,
  fetchProductsByFilters,
   fetchBrands, 
   fetchCategories,
    fetchProductById } from './ProductAPI';

const initialState = {
  products: [],
  totalItems:0,
  brands:[],
  categories:[],
  status: 'idle',

  selectedProduct:null
};

export const fetchAllProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductsAsync = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    console.log("slice recieves data",response.data);
    return response.data;
  }
);


export const fetchProductsByFiltersAsync = createAsyncThunk(
  'products/fetchProductsByFilter',
   async ({filter,sort,pagination}) => {
    console.log("pagination object in slice",pagination)
    const response = await fetchProductsByFilters(filter,sort,pagination);
    // The value we return becomes the `fulfilled` action payload
    console.log("this from filter slice",response.data);
    return response.data;
    
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  'products/fetchBrands',
  async () => {
    const response = await fetchBrands();
    // The value we return becomes the `fulfilled` action payload
    console.log("slice recieves data",response.data);
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await fetchBrands(); fetchCategories();
    // The value we return becomes the `fulfilled` action payload
    console.log("slice recieves data",response.data);
    return response.data;
  }
);





export const productSlice = createSlice({
  name: 'product',
  initialState,
 
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchAllProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })
  },
});

export const { increment } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectAllProducts = (state) => state.product.products;

export const selectCategories = (state) => state.product.categories;

export const selectBrands = (state) => state.product.brands;

export const selectTotalItems = (state) => state.product.totalItems;

export const selectProductById = (state) => state.product.selectedProduct;

export default productSlice.reducer;
