package com.swan.agora.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Account {
    @Id
    public ObjectId _id;

    public String name;
    public String passwordHash;
    public String username;
    public String email;

    /** Constructors */
    public Account() {}

    public Account(ObjectId _id, String name, String passwordHash, String username,
                   String email) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.passwordHash = passwordHash;
        this.email = email;
    }

    /** Getters and Setters */
    public String get_id() {
        return _id.toHexString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }
}
