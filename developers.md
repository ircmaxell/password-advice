---
layout: page
title: Developers
tagline: Password Information for Developers
group: navigation
---
{% include JB/setup %}

## How To Store Passwords 

* # General

   In general, you want to use a strong algorithm. Suggested algorithms in order of preference are as follows:

   * [scrypt](#scrypt)
   * [bcrypt](#bcrypt)
   * [pbkdf2](#pbkdf2)



* # In PHP 

   PHP has several options for hashing passwords:

   * Using crypt()
       
       PHP comes with `crypt()` built in. It can be used pretty easily

           $hash = crypt($password, $salt);

   * Using password_hash()

       In PHP 5.5, a new method is available

## Best Practices

* # How To Generate Salts

    In order for a salt to be effective, it should be unique. The best way to preserve uniqueness is to generate the salt using a random number generator. 

* # How To Store Salts

    The current best-practice recomendation is to store the salt along with the hash in the same field in the database.

    In fact, if you use `crypt()`, the salt is included in the hashed output.

## Algorithms

* # SCRYPT

    Scrypt is an algorithm developed...

* # BCRYPT

    Bcrypt is an algorithm developed...

* # PBKDF2

    PBKDF2 is an algorithm developed...

## FAQ

* # Why Not Store Passwords In Plain Text?

    It's a dumb idea...

* # Why Isn't MD5(password) Good Enough?

    Absolutely not! The problem is that `md5()` is a *fast* hash function.

* # Why Isn't MD5(password + salt) Good Enough?

    Absolutely not! The problem is that `md5()` is a *fast* hash function.

* # Why Isn't SHA512(password + salt) Good Enough?

    Absolutely not! The problem is that `sha512()` is a *fast* hash function.

* # Why Shouldn't I Add A Site-Wide Salt (a Pepper)?

    They are a bad idea
