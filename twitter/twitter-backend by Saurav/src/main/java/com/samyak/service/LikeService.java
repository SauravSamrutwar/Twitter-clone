package com.samyak.service;

import java.util.List;

import com.samyak.exception.TwitException;
import com.samyak.exception.UserException;
import com.samyak.model.Like;
import com.samyak.model.User;

public interface LikeService {
	public Like likeTwit(Long twitId,User user) throws UserException,TwitException;
	
	public List<Like> getAllLikes(Long twitId) throws TwitException;
}
