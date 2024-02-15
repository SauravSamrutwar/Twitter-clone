package com.samyak.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class TwitDto {
	
	private Long id;
	private String content;
	private String image;
	private String video;
	private UserDto user;
	private LocalDateTime createdAt;
	private int totalLikes;
	private int totalReplies;
	@Override
	public String toString() {
		return "TwitDto [id=" + id + ", content=" + content + ", image=" + image + ", video=" + video + ", user=" + user
				+ ", createdAt=" + createdAt + ", totalLikes=" + totalLikes + ", totalReplies=" + totalReplies
				+ ", totalRetweets=" + totalRetweets + ", isLiked=" + isLiked + ", isRetwit=" + isRetwit
				+ ", retwitUsersId=" + retwitUsersId + ", replyTwits=" + replyTwits + "]";
	}
	private int totalRetweets;
	private boolean isLiked;
	private boolean isRetwit;
	private List<Long> retwitUsersId;
	private List<TwitDto> replyTwits;
}
