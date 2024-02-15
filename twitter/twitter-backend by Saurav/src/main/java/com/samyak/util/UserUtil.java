package com.samyak.util;

import com.samyak.model.User;

public class UserUtil {

	public final static boolean isReqUser(User reqUser,User user2) {
		return reqUser.getId().equals(user2.getId());
	}
	
	public final static boolean isFollowedByReqUser(User reqUser,User user2) {
		return reqUser.getFollowings().contains(user2);
	}
}
