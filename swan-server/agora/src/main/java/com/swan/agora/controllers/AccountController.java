package com.swan.agora.controllers;

import com.swan.agora.constants.ApiConstants;
import com.swan.agora.models.Account;
import com.swan.agora.repositories.AccountRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.BASE_ACCOUNT_URL)
public class AccountController {
    @Autowired
    private AccountRepository repository;

    @RequestMapping(value = ApiConstants.GET_ACCOUNTS_URL, method = RequestMethod.GET)
    public List<Account> getAllAccounts() {
        return repository.findAll();
    }

    @RequestMapping(value = ApiConstants.GET_ACCOUNT_BY_ID, method = RequestMethod.GET)
    public Account getAccountBy_Id(@PathVariable ObjectId id) {
        return repository.findBy_id(id);
    }

    @RequestMapping(value = ApiConstants.GET_ACCOUNT_BY_USERNAME, method = RequestMethod.GET)
    public Account getAccountByUsername(@RequestParam("username") String username) {
        return repository.findByUsername(username);
    }

    @RequestMapping(value = ApiConstants.CREATE_NEW_ACCOUNT_URL, method = RequestMethod.POST)
    public Account createAccount(@RequestBody Account account) {
        account.set_id(ObjectId.get());
        repository.save(account);
        return account;
    }
}
