export {};

declare global {
	namespace Express {
		interface Request {
			user?: any;
			admin?: any;
		}
	}
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: string;
			PORT: string;
			SSL: boolean;
			JWTSECRET: string;
			JWT_EXPIRY_TIME: string;
			DBNAME: string;
			DBUSERNAME: string;
			DBPASSWORD: string;
			DBHOST: string;
			DBPORT: number;
			DBDIALECT: string;
			MAIL_FROM: string;
			MAIL_FROM_NAME: string;
			SENDGRID_API_KEY: string;
			TWILLIO_ACCOUNT_SID: string;
			TWILLIO_AUTH_TOKEN: string;
			TWILLIO_MESSAGE_SERVICE_ID: string;
			PUBLIC_ROUTES: string[];
		}
	}
}
