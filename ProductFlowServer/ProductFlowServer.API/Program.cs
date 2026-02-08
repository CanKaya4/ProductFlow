using Microsoft.OpenApi;
using ProductFlowServer.Business;
using ProductFlowServer.DataAccess;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDataAccessServices(builder.Configuration);
builder.Services.AddBusinessServices(builder.Configuration);
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{

    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "ProductFlowServer API",
        Version = "v1.0.0",
        Description = "FullStack Developer - 1. Aþama Task"
    });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNextjsApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")  
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProductFlow API v1");
    });
}

app.UseHttpsRedirection();
app.UseCors("AllowNextjsApp");
app.UseAuthorization();

app.MapControllers();

app.Run();
