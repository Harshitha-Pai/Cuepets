package com.cuepets.CuePets.Services;

import com.cuepets.CuePets.Model.BlogPosts;
import com.cuepets.CuePets.Repository.BlogPostsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.UUID;

@Service
public class BlogPostsServices {
    @Autowired
    private BlogPostsRepo blogPostsRepo;

     public BlogPosts saveBlogPosts(BlogPosts blogPosts,String ownerID) {
        // Generate a UUID and set it as the blog ID
        blogPosts.setOwnerId(ownerID);
        blogPosts.setBlogId(UUID.randomUUID().toString());
        blogPostsRepo.save(blogPosts);
        return blogPosts;
    }
}
