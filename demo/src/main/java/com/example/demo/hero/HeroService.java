package com.example.demo.hero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroService {
    
    @Autowired private HeroRepo heroRepo;

    public Iterable<Hero> getAllHeros() {
        return this.heroRepo.findAll();
    }

    public boolean insertHeros(HeroDTO heroDTO) {
        try {
            this.heroRepo.save(Hero.of(null,heroDTO.Name));
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
