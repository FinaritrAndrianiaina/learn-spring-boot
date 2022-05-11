package com.example.demo.hero;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeroRepo extends CrudRepository<Hero,Long> {
    
}
