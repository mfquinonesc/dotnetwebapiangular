using backend;
using backend.Data;
using backend.Services;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Adding the connection string to connect the api to the data base 
builder.Services.AddSqlServer<DBLibraryContext>(builder.Configuration.GetConnectionString("DBLibraryConnection"));

// Service layer 
builder.Services.AddScoped<AuthorService>();
builder.Services.AddScoped<BookService>();
builder.Services.AddScoped<EditorialService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyAllowSpecificOrigins",
        policy =>
        {
            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyAllowSpecificOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
