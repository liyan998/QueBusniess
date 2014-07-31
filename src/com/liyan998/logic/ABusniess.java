package com.liyan998.logic;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

public abstract class ABusniess implements IBusniess
{
	
	protected String name;
	
	public int id;

	protected List<IUser> allUser;
	
	public ABusniess()
	{
		allUser = new ArrayList<IUser>();		
	}
	
	@Override
	public void addUser(IUser user)
	{
		allUser.add(user);
	}
	
	@Override
	public void removeUser(long id)
	{
		allUser.remove(id);
	}


}
