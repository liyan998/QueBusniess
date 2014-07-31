package com.liyan998.logic;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueService
{
	private static QueService qs;

	public static QueService getInstrance()
	{
		if (qs == null)
		{
			qs = new QueService();
		}
		return qs;
	}

	// Map<Long , IUser> allUser;

	// 生产力
	List<IBusniess> allBus;
	
	int count;

	private QueService()
	{
		// allUser = new HashMap<Long, IUser>();
		allBus = new ArrayList<IBusniess>();
		initBus();

	}

	private void initBus()
	{
		// TODO DDDDDDDDDD
		Busniess1 b1 = new Busniess1();
		b1.name = "张三";
		b1.id = 1;
		allBus.add(b1);

		Busniess1 b2 = new Busniess1();
		b2.name = "水池";
		b2.id = 2;
		allBus.add(b2);
	}

	

	/**
	 * 将用户添加进业务
	 * 
	 * @param user
	 */
	public User addToBusneiss(int index, int channel)
	{
		User user = new User();
		user.id = count++;
		
		//TODO ID NOT INDEX
		allBus.get(index).addUser(user);
		
		return user;
	}

	/**
	 * 将用户移除
	 */
	public void removeUserFormBus(int index, long uid)
	{
		allBus.get(index).removeUser(uid);
	}

	public List<IBusniess> getAllBusniesses()
	{
		return allBus;
	}
}
