package com.liyan998;

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
 * Servlet implementation class TestServlet
 */
@WebServlet("/TestServlet")
public class TestServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public TestServlet()
	{
		super();
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

	private void proessRequest(HttpServletRequest request,
			HttpServletResponse response)
	{

		response.setCharacterEncoding("utf-8");

		PrintWriter pw = null;
		try
		{
			pw = response.getWriter();

			List<IBusniess> allBus = QueService.getInstrance()
					.getAllBusniesses();

//			for (IBusniess bus : allBus)
//			{
//				pw.append("<h1>" + bus.getJData() + "</h1>");
//			}
			pw.append(StringUtil.gson.toJson(allBus));
			pw.flush();

		} catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		pw.close();
	}

}
