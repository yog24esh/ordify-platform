package com.ordify.admin.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ordify.admin.common.session.SessionResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	  private final SessionResolver sessionResolver;

	    public WebConfig(SessionResolver sessionResolver) {
	        this.sessionResolver = sessionResolver;
	    }

	    @Override
	    public void addInterceptors(InterceptorRegistry registry) {
	        registry.addInterceptor(sessionResolver)
	                .addPathPatterns("/admin/**");
	    }
}

//.excludePathPatterns("/admin/test");