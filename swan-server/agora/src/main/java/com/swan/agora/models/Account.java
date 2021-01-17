package com.swan.agora.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

public class Account {
    @Id
    public ObjectId _id;
    public String name;
    public byte[] passwordHash;
    public String username;
    public String email;

    /** Constructors */
    public Account() {}

    public Account(ObjectId _id, String name, String password, String username,
                   String email) throws InvalidKeySpecException, NoSuchAlgorithmException {
        this._id = _id;
        this.name = name;
        this.username = username;
        setPasswordHash(password);
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

    public byte[] getPasswordHash() {
        return passwordHash;
    }
    private void setPasswordHash(String password) throws InvalidKeySpecException, NoSuchAlgorithmException {
        byte[] salt = "winfoSWAN".getBytes();
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 128);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        this.passwordHash = factory.generateSecret(spec).getEncoded();
    }
}
