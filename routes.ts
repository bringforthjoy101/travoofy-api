// Import packages
import { Router } from 'express';

// Import function files
import { preLogin, register, updatePassword, resetPassword, changePassword, verifyOtp, updateUserSettings } from './controllers/authentication';
// import {admins, usersModule} from './controllers/admin/index';
import admin from './controllers/admin';
import validate from './validate';
import { isAdmin } from './helpers/middlewares';
import { AdminRoles } from './helpers/types';

const router = Router();

/*************************************************************************
API CALL START
*************************************************************************/

// INDEX ROUTE TO SHOW API IS WORKING FINE
router.get('/', (req, res) => {
	return res.status(200).send('API Working');
});

router.post('/register', validate('/register'), register);
router.post('/login', validate('/login'), preLogin);
router.post('/update-password', validate('/update-password'), updatePassword);
router.post('/reset-password', validate('/reset-password'), resetPassword);
router.post('/change-password', validate('/change-password'), changePassword);
router.post('/verify-otp', validate('/verify-otp'), verifyOtp);
router.post('/update-user-settings', validate('/update-user-settings'), updateUserSettings);

router.post('/admin/register', isAdmin([AdminRoles.CONTROL]), validate('/register'), admin.register);
router.post('/admin/login', validate('/login'), admin.login);
router.post('/admin/update-password', validate('/update-password'), admin.updatePassword);
router.post('/admin/reset-password', validate('/reset-password'), admin.resetPassword);
router.post('/admin/change-password', validate('/change-password'), admin.changePassword);
router.get('/admin/get-users', admin.getUsers);
router.get('/admin/get-details/:id', validate('id'), admin.getUserDetails);

export default router;
