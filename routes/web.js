const express = require("express");

const router = express.Router();
const ProductController = require("../controllers/products-controller");
const AdminController = require("../controllers/admin-controller");
const UserController = require("../controllers/user-controller");
const OrderController = require("../controllers/order-controller");
const PaymentController = require("../controllers/payment-controller");
const ProductCategoryController = require("../controllers/productCategory-controller");
const ContactController = require("../controllers/contact-controller");
const CartController = require("../controllers/cart-controller");


//const ProductControllers = require('./controllers/product-controller/getAllProducts') product-controller
//products

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getSingleProduct);
router.post('/products/store', ProductController.storeProduct);
router.patch('/products/:id/update', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

//Admin Routes
router.get('/admins', AdminController.getAllAdmin);
router.get('/admins/:id', AdminController.getSingleAdmin);
router.post('/admins/store',AdminController.storeAdmin);
router.patch('/admins/:id/update', AdminController.updateAdmin);
router.delete('/admins/:id',AdminController.deleteAdmin);

//User Routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getSingleUser);
router.post('/users/store', UserController.storeUser);
router.patch('/users/:id/update', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

//Order Routes

router.get('/orders', OrderController.getAllOrders);
router.get('/order/:id', OrderController.getSingleOrder);
router.post('/order/store', OrderController.storeOrder);
router.patch('/order/:id/update', OrderController.updateOrder);
router.delete('/order/:id', OrderController.deleteOrder);


//Payment Routes
router.get('/payments', PaymentController.getAllPayments);
router.get('/payment/:id', PaymentController.getSinglePayment);
router.post('/payment/store', PaymentController.storePayment);
router.patch('/payment/:id/update', PaymentController.updatePayment);
router.delete('/payment/:id', PaymentController.deletePayment);

//Cart Routes
router.get('/carts', CartController.getAllCarts);
router.get('/cart/:id', CartController.getSingleCart);
router.post('/cart/store', CartController.storeCart);
router.patch('/cart/:id/update', CartController.updateCart);
router.delete('/cart/:id', CartController.deleteCart);

//Contact Routes
router.get('/contacts', ContactController.getAllContacts);
router.get('/contact/:id', ContactController.getSingleContact);
router.post('/contact/store', ContactController.storeContact);
router.patch('/contact/:id/update', ContactController.updateContact);
router.delete('/contact/:id', ContactController.deleteContact);

//ProductCategory Routes
router.get('/productCategories', ProductCategoryController.getAllProductCategories);
router.get('/productCategory/:id', ProductCategoryController.getSingleProductCategory);
router.post('/productCategory/store', ProductCategoryController.storeProductCategory);
router.patch('/productCategory/:id/update', ProductCategoryController.updateProductCategory);
router.delete('/productCategory/:id', ProductCategoryController.deleteProductCategory);


module.exports = router;
