package com.liyan998.logic;

public interface IBusniess
{
	
	public void addUser(IUser user);
	
	public IUser getUser(long id);
	
	public void removeUser(long id);
	
	public String getJData();
	
	public IUser checkOut();
}
