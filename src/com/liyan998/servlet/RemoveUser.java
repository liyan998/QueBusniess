package com.liyan998.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import util.StringUtil;

import com.liyan998.logic.IBusniess;
import com.liyan998.logic.QueService;

/**
 * Servlet implementation class RemoveUser
 */
@WebServlet("/RemoveUser")
public class RemoveUser extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RemoveUser()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException
	{
		proessRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException
	{
		proessRequest(request, response);
	}
	
	class T_Result
	{
		int code;
		
	}

	private void proessRequest(HttpServletRequest request,
			HttpServletResponse response)
	{
		response.setCharacterEncoding("utf-8");

		PrintWriter pw = null;
		try
		{
			pw = response.getWriter();

			QueService qs = QueService.getInstrance();
			
			//qs.removeUserFormBus(index, uid);
			
			
			T_Result result = new T_Result();
			result.code = 1;
			//qs.checkOut(id);
			
			pw.append(StringUtil.gson.toJson(result));
			pw.flush();

		} catch (IOException e)
		{
			e.printStackTrace();
		}

		pw.close();
	}
}
