# Redis and Sidekiq

__Objectives__

* Describe what Redis and Sidekiq are useful for, how they work at a high level
* Be able to write a Sidekiq worker
* Use Unicorn as your server
* Send an email using action mailer

## What is Redis?



Redis is a data storage system that stores data in memory.  The data is only written to a single computer and is not guaranteed to be saved  to disk on every request. In other words, if Redis goes down, there may be some data loss. Redis is useful for data that you are ok with losing.  Redis is not a replacement for a relational database.

[http://try.redis.io/](http://try.redis.io/)

## Installing And Running Redis

On __OS X__:

```
brew install redis
```
On __Linux__:

```
sudo apt-get install redis
```

To run the Redis server do:

```
redis-server
```
__OR__ try this command if you need a config file:

```
redis-server /usr/local/etc/redis.conf
```

And to interact with Redis in the terminal, run the redis command line interface:

```
redis-cli
```

### Exercise

In the redis-cli, try out some of the available commands defined in the [redis commands document](http://redis.io/commands/#).  In particular, try using the string commands ```GET``` and ```SET``` as well as the list commands ```LPUSH```, ```RPUSH```, and ```LINDEX```.  Also, key commands can be useful.  Try ```KEYS *``` and ```TYPE <keyname>```

## What is Sidekiq?

Sidekiq is a framework for executing background jobs within a rails application.  It is a gem file that runs within your server process so it has access to all of the rails environment, including ActiveRecord models.  Under the covers, Sidekiq uses Redis to store a queue of jobs.  Resque is a very similar technology that was used in the past.  The main difference is that Resque will use more memory than Sidekiq for the same ammount of work.

## Process vs Thread

To help make sense of the upcoming exercise, it is important to differentiate between a process and a thread.  You can think of a program as a process.  It runs separatly from other processes.   The memory that a given process, process A, has cannot be accessed by other processes, process B for example.  

__A process can have many threads__.  A thread is a more light weight way to execute code that does allow shared memory access.  In other words if a program has 2 threads running, thread A can access memory from thread B.  This makes multi threaded programming less safe for the implementor of the code, but potentially faster.

### Exercise

Watch the [railscast on sidekiq](http://railscasts.com/episodes/366-sidekiq).  Discuss sidekiq and when it would be useful.  Implement the code highlighting example from the railscast.  Try __NOT__ to cheat!


## Resources

* [Redis Quick Start Guide](http://redis.io/topics/quickstart) - Ignore the installing Redis section
* [Redis Data Types](http://redis.io/topics/data-types)
* [Sidekiq RailsCast](http://railscasts.com/episodes/366-sidekiq)
* [Sidekiq Wiki](https://github.com/mperham/sidekiq/wiki)
* [Running Unicorn on Heroku](https://devcenter.heroku.com/articles/rails-unicorn)
* [Sidetiq](https://github.com/tobiassvn/sidetiq) - Useful for recurring dealyed jobs