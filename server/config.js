import 'dotenv/config'

export default {
    JWT_SECRET : process.env.JWT_SECRET,
    EMAIL: process.env.EMAIL, 
    PASSWORD : process.env.PASSWORD,
    ATLAS_URI: process.env.ATLAS_URI || "your_mongodb_atlas_url<very_imprtant>"
}