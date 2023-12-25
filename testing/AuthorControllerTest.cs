using backend.Controllers;
using backend.Data;
using System.Text.Json;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace testing;

[TestClass]
public class AuthorControllerTest
{
    private AuthorController _controller;
    private DBLibraryContext _context;

    public AuthorControllerTest()
    {
        this._context = new DBContext();
        this._controller = new AuthorController(this._context);
    }   

    [TestMethod]
    public void GetAlls()
    {
        var result = this._controller.GetAuthorAlls();           
        Assert.AreEqual(result.Count(), 4);
    }
}