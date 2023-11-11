

using API.Errors;
using API.Extensions;
using API.Helpers;
using API.Middleware;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //Dung cho nhieu truong hop AddScoped
            // builder.Services.AddScoped<IProductRepository, ProductRepository>();
            // builder.Services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));
            // Add services to the container.
            builder.Services.AddAutoMapper(typeof(MappingProfiles));
            builder.Services.AddControllers();
            //Cau hinh ket noi toi co so du lieu qua connectionStrring
            builder.Services.AddDbContext<StoreContext>(x => x.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
            // De dich chuyen sang Extensions
            builder.Services.AddApplicationServices(builder.Configuration);
            builder.Services.AddSwaggerDocumentation();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            // builder.Services.Configure<ApiBehaviorOptions>(
            //  options =>
            //  {
            //      options.InvalidModelStateResponseFactory = actionContext =>
            //      {
            //          var errors = actionContext.ModelState
            //                      .Where(e => e.Value.Errors.Count > 0)
            //                      .SelectMany(x => x.Value.Errors)
            //                      .Select(x => x.ErrorMessage).ToArray();

            //          var errorResponse = new ApiValidationErrorResponse
            //          {
            //              Errors = errors
            //          };

            //          return new BadRequestObjectResult(errorResponse);
            //      };
            //  });

            builder.Services.AddEndpointsApiExplorer();
            // builder.Services.AddSwaggerGen(c => 
            // {
            //     c.SwaggerDoc("v1", new OpenApiInfo {Title = "SkiNet API", Version = "v1"});
            // });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            // if (app.Environment.IsDevelopment())
            // {
            //     app.UseSwagger();
            //     app.UseSwaggerUI();
            // }
            app.UseMiddleware<ExceptionMiddleware>();

            app.UseStatusCodePagesWithReExecute("/errors/{0}");
            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseStaticFiles();

            app.UseAuthorization();
            // app.UseSwagger();
            // app.UseSwaggerUI(c => 
            // {
            //     c.SwaggerEndpoint("/swagger/v1/swagger.json", "SkiNet API v1");
            // });
            app.UseSwaggerDocumentation();
            app.MapControllers();
            //
            using var scope = app.Services.CreateScope();
            var services = scope.ServiceProvider;
            var context = services.GetRequiredService<StoreContext>();
            var loggerFactory = services.GetRequiredService<ILoggerFactory>();
            try
            {
                await context.Database.MigrateAsync();
                await StoreContextSeed.SeedAsync(context, loggerFactory);
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<Program>();
                logger.LogError(ex, "An error occured during migration");
            }

            //
            app.Run();
        }
    }
}