package com.samyak.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class UserDto {

	private Long id;
	private String fullName;
	private String email;
	private String image;
	private String location;
	private String website;
	private String birthDate;
	private String mobile;
	private String backgroundImage;
	private String bio;
	private boolean req_user;

	private List<UserDto> followers = new ArrayList<>();
	private List<UserDto> following = new ArrayList<>();
	
	private boolean followed;
	
	private boolean isVerified;
	private boolean login_with_google;
}
