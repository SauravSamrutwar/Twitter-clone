package com.samyak.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.samyak.exception.TwitException;
import com.samyak.exception.UserException;
import com.samyak.model.Like;
import com.samyak.model.Twit;
import com.samyak.model.User;
import com.samyak.repository.LikeRepository;
import com.samyak.repository.TwitRepository;

@Service
public class LikeServiceImplementation implements LikeService{

	@Autowired
	private LikeRepository likeRepository;
	
	@Autowired
	private TwitService twitSerivice;
	
	@Autowired
	private TwitRepository twitRepository;
	
	
	@Override
	public Like likeTwit(Long twitId, User user) throws UserException, TwitException {
		Like isLikeExist = likeRepository.isLikeExist(user.getId(), twitId);
		
		if(isLikeExist != null) {
			likeRepository.deleteById(isLikeExist.getId());
			return isLikeExist;
		}
		
		Twit twit = twitSerivice.findById(twitId);
		Like like = new Like();
		like.setTwit(twit);
		like.setUser(user);
		
		
		Like savedLike = likeRepository.save(like);
		
		twit.getLikes().add(savedLike);
		twitRepository.save(twit);
		return savedLike;
	}

	@Override
	public List<Like> getAllLikes(Long twitId) throws TwitException {
		Twit twit = twitSerivice.findById(twitId);
		
		List<Like> likes = likeRepository.findByTwitId(twitId);
		
		return likes;
	}

}
