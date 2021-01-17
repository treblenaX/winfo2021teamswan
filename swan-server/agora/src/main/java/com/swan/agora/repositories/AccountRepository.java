package com.swan.agora.repositories;

import com.swan.agora.models.Account;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository extends MongoRepository<Account, String> {
    Account findBy_id(ObjectId _id);

    Account findByUsername(String username);
}
