---
layout: page
title: Developers
tagline: Password Information for Developers
group: navigation
---
{% include JB/setup %}

## Storing User Passwords

* # General Storage

   Content!

      function foo() {
          //bar
      }

   Back out

* # In PHP 

   PHP has several options for hashing passwords:

   * Using crypt()
       
       PHP comes with `crypt()` built in. It can be used pretty easily

           $hash = crypt($password, $salt);

   * Using password_hash()

       In PHP 5.5, a new method is available


