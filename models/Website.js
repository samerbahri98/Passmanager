const mongoose = require('mongoose')

const WebsiteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    WebsiteName: {
        type: String,
        required : true,
    },    
    WebsiteUrl: {
        type: String,
    },
    Username: {
        type: String,
    },
    Email: {
        type: String,
    },
    Phone: {
        type: Number,
    },  
    Password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports= mongoose.model('Website',WebsiteSchema)