package com.example.demo.hero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("hero")
public class HeroController {
    
    @Autowired private HeroService heroService;

    @GetMapping(value="")
    public Iterable<Hero> getAllHero() {
        return this.heroService.getAllHeros();
    }
    
}
