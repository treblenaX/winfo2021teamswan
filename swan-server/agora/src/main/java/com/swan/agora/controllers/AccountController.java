package com.swan.agora.controllers;

import com.swan.agora.constants.ApiConstants;
import com.swan.agora.models.Account;
import com.swan.agora.repositories.AccountRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(ApiConstants.BASE_ACCOUNT_URL)
public class AccountController {
    @Autowired
    private AccountRepository repository;

    // Allows the clients to access a list of all accounts in database
    @RequestMapping(value = ApiConstants.GET_ACCOUNTS_URL, method = RequestMethod.GET)
    public List<Account> getAllAccounts() {
        return repository.findAll();
    }
    // Allows clients to search for a specific account through custom IDs
    @RequestMapping(value = ApiConstants.GET_ACCOUNT_BY_ID, method = RequestMethod.GET)
    public Account getAccountBy_Id(@PathVariable ObjectId id) {
        return repository.findBy_id(id);
    }
    // Allows clients to search for an account through specific username
    @RequestMapping(value = ApiConstants.GET_ACCOUNT_BY_USERNAME, method = RequestMethod.GET)
    public Account getAccountByUsername(@RequestParam("username") String username) {
        return repository.findByUsername(username);
    }
    // Login checker to verify whether account exists in database with given username and password (hashed)
    @RequestMapping(value = ApiConstants.LOGIN_URL, method = RequestMethod.GET)
    public boolean existingAccount(@RequestParam("username") String username,
                                   @RequestParam("pass") String password) throws InvalidKeySpecException, NoSuchAlgorithmException {
        Account account = repository.findByUsername(username);
        return (Arrays.equals(account.passwordHash, hashPassword(password)));
    }
    // Allows clients to create new accounts
    @RequestMapping(value = ApiConstants.CREATE_NEW_ACCOUNT_URL, method = RequestMethod.POST)
    public Account createAccount(@RequestBody Account account) {
        // If the database already contains an account with said username, then do not create a new account
        if (repository.findByUsername(account.username) == null) {
            account.set_id(ObjectId.get());
            repository.save(account);
            return account;
        }
        return null;
    }
    // Method for deleting all accounts (method for devs to test custom dummy data)
    @RequestMapping(value = ApiConstants.DELETE_ALL_ACCOUNTS, method = RequestMethod.DELETE)
    public void deleteAll() {
        repository.deleteAll();
    }
    // Private hashing method to take string entries, hash them, and compare to entries in database
    private byte[] hashPassword(String password) throws InvalidKeySpecException, NoSuchAlgorithmException {
        byte[] salt = "winfoSWAN".getBytes();
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 128);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        return factory.generateSecret(spec).getEncoded();
    }
}
