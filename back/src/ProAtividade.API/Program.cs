using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Context;
using ProAtividade.Data.Repositories;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;
using ProAtividade.Domain.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlite(connectionString)
);
builder.Services.AddScoped<IAtividadeRepository, AtividadeRepository>();
builder.Services.AddScoped<IAtividadeService, AtividadeService>();
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    }                   );
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(option => option.AllowAnyHeader()
    .AllowAnyMethod()
    .AllowAnyOrigin());

app.UseCors("AllowAll");

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
