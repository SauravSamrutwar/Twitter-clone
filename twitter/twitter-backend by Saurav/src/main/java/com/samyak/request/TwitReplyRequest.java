package com.samyak.request;

import java.time.LocalDateTime;

import lombok.Data;

public class TwitReplyRequest {
	
	private String content;
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Long getTwitId() {
		return twitId;
	}
	public void setTwitId(Long twitId) {
		this.twitId = twitId;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	private Long twitId;
	private LocalDateTime createdAt;
	private String image;
}
