package com.liyan998.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import util.StringUtil;

import com.liyan998.logic.QueService;
import com.liyan998.logic.User;

/**
 * Servlet implementation class AddUser
 */
@WebServlet("/AddUser")
public class AddUser extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddUser()
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
		response.setCharacterEncoding("utf-8");
		proessRequest(request, response);
	}

	private void proessRequest(HttpServletRequest request,
			HttpServletResponse response)
	{
		String indexstr 	= request.getParameter("busIndex");
		String channelstr 	= request.getParameter("channel");

		if (indexstr == null || indexstr.equals(""))
		{
			return;
		}
		if (channelstr == null || channelstr.equals(""))
		{
			return;
		}

		// -----------------------------------------------------------
		PrintWriter pw = null;
		try
		{
			pw = response.getWriter();

			QueService qs = QueService.getInstrance();

			int index 	= Integer.parseInt(indexstr);
			int channel = Integer.parseInt(channelstr);

			User user = qs.addToBusneiss(index, channel );
			
			pw.append(StringUtil.gson.toJson(user));

			pw.flush();

		} catch (IOException e)
		{
			e.printStackTrace();
		}

		pw.close();
	}

}
