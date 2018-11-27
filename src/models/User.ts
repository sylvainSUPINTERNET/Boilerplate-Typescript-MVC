'use strict';

import {Schema, Model, model, mongoose} from "mongoose";

import { IUser } from "./interfaces/IUser";

import * as bcrypt from 'bcrypt';

const SALT_FACTOR = 10;


export let UserSchema:Schema = new Schema({
    firstname: {
        type: String,
        required: 'Your firstname is empty ....'
        },
    lastname: {
        type: String,
        required: 'Your lastname is empty ...'
    },
    email: {
        type: String,
        required: 'Your email is empty'
    },
    password: {
        type: String,
        required: 'Your password is empty'
    },
    createdAt: {
        type: Date
    }
}, {
    timestamps: { //set date automaticly
        createdAt: 'created_at'
    }
});


export let User: Model<IUser> = model<IUser>("User", UserSchema);

// Hash password
UserSchema.pre('save', function(next) {

    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};