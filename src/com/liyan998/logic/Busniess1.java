package com.liyan998.logic;

import util.StringUtil;

public class Busniess1 extends ABusniess
{

	@Override
	public String getJData()
	{		
		return StringUtil.gson.toJson(this);
	}

	@Override
	public IUser getUser(long id)
	{
		// TODO Auto-generated method stub
		return null;
	}

	

}
