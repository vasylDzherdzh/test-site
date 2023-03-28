import  express  from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js"

const router = express.Router();

router.get('/', getAllProducts);
router.get(':id', getProductById);
router.post('/create', createProduct);
router.patch('/upd/:id', updateProduct);
router.delete('/del/:id', deleteProduct);
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


export default router;