package com.samyak.util;

import com.samyak.model.Like;
import com.samyak.model.Twit;
import com.samyak.model.User;

public class TwitUtil {
	
	public static final boolean isLikedByReqUser(User reqUser,Twit twit) {
		
		for(Like like : twit.getLikes()) {
			if(like.getUser().getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}
	
public static final boolean isRetwitedByReqUser(User reqUser,Twit twit) {
		
		for(User user : twit.getRetwitUser()) {
			if(user.getId().equals(reqUser.getId())) {
				return true;
			}
		}
		return false;
	}
}
