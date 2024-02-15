package com.samyak.service;

import java.util.List;

import com.samyak.exception.TwitException;
import com.samyak.exception.UserException;
import com.samyak.model.Twit;
import com.samyak.model.User;
import com.samyak.request.TwitReplyRequest;

public interface TwitService {

	public Twit createTwit(Twit req,User user) throws UserException;
	
	public List<Twit> findAllTwit();
	
	public Twit retwit(Long twitId,User user) throws UserException,TwitException;
	
	public Twit findById(Long twitId) throws TwitException;
	
	public void deleteTwitById(Long twitId,Long userId) throws UserException,TwitException;
	
	public Twit removeFromRetwit(Long twitId,User user) throws UserException,TwitException;
	
	public Twit createReply(TwitReplyRequest req,User user)throws UserException,TwitException;
	
	public List<Twit> getUserTwit(User user);
	
	public List<Twit> findByLikesContainsUser(User user);
}
