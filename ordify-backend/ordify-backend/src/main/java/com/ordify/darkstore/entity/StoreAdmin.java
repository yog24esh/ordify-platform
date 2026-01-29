package com.ordify.darkstore.entity;

import com.ordify.authenticator.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "store_admin")
public class StoreAdmin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_admin_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private DarkStore store;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // getters/setters
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public DarkStore getStore() {
		return store;
	}
	public void setStore(DarkStore store) {
		this.store = store;
	}

	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}


}

