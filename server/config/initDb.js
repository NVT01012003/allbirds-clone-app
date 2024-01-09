import { User } from "../models/user.js";
import { Shipping_address } from "../models/shipping_address.js";
import { Review } from "../models/review.js";
import { Product } from "../models/product.js";
import { Product_detail } from "../models/product_detail.js";
import { Order } from "../models/order.js";
import { Order_item } from "../models/order_item.js";
import { Category } from "../models/category.js";
import { Cart } from "../models/cart.js";
import { Cart_item } from "../models/cart_item.js";

// products
Category.hasMany(Product, { sourceKey: "id" });
Product.belongsTo(Category, { targetKey: "id" });

User.hasMany(Product, { sourceKey: "id" });
Product.belongsTo(User, { targetKey: "id" });

Product_detail.hasMany(Product, { sourceKey: "id" });
Product.belongsTo(Product_detail, { targetKey: "id" });

// carts
User.hasOne(Cart, { sourceKey: "id" });
Cart.belongsTo(User, { targetKey: "id" });

// cart_items
Cart.hasMany(Cart_item, { sourceKey: "id" });
Cart_item.belongsTo(Cart, { targetKey: "id" });

Product.hasMany(Cart_item, { sourceKey: "id" });
Cart_item.belongsTo(Product, { targetKey: "id" });

// orders
User.hasMany(Order, { sourceKey: "id" });
Order.belongsTo(User, { targetKey: "id" });

Shipping_address.hasMany(Order, { sourceKey: "id" });
Order.belongsTo(Shipping_address, { targetKey: "id" });

// order_items
Order.hasMany(Order_item, { sourceKey: "id" });
Order_item.belongsTo(Order, { targetKey: "id" });

Product.hasMany(Order_item, { sourceKey: "id" });
Order_item.belongsTo(Product, { targetKey: "id" });

// reviews
User.hasMany(Review, { sourceKey: "id" });
Review.belongsTo(User, { targetKey: "id" });

Product.hasMany(Review, { sourceKey: "id" });
Review.belongsTo(Product, { targetKey: "id" });
