using asp_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data;

namespace asp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceryController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public GroceryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: GroceryController
        [HttpGet]
        public ActionResult GetGroceryLst()
        {
            try
            {
                string query = @"SELECT id, seller_id, name, gro_address, type_of_business, tax_number, business_field, availble_product, avg_availble_product, avg_order, gro_road_name, gro_apartment_number FROM Groceries";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        mycon.Close();
                    }
                }

                return Ok(table);
            }
            catch (System.Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpPost]
        public ActionResult CreateGrocery(Groceries gr)
        {
            try
            {
                string query = @"INSERT INTO Groceries (seller_id, name, address, type_of_business, tax_number) VALUES (@seller_id, @name, @address, @type_of_business, @tax_number)";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@seller_id", gr.seller_id);
                        myCommand.Parameters.AddWithValue("@name", gr.name);
                        myCommand.Parameters.AddWithValue("@address", gr.address);
                        myCommand.Parameters.AddWithValue("@type_of_business", gr.type_of_business);
                        myCommand.Parameters.AddWithValue("@tax_number", gr.tax_number);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }

                return StatusCode(200, "Cửa hàng được thêm thành công!");
            }
            catch (System.Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpPut("{id}")]
        public ActionResult UpdateGrocery(Groceries gr, int id)
        {
            try
            {
                string query = @"
                        UPDATE Groceries SET
                        availble_product=@availble_product, avg_availble_product=@avg_availble_product,
                        avg_order=@avg_order
                        where id=@id;       
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);
                        myCommand.Parameters.AddWithValue("@availble_product", gr.availble_product);
                        myCommand.Parameters.AddWithValue("@avg_availble_product", gr.avg_availble_product);
                        myCommand.Parameters.AddWithValue("@avg_order", gr.avg_order);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }

                return StatusCode(200, "Cập nhật thông tin cửa hàng thành công!");
            }
            catch (System.Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                string query = @"
                        DELETE FROM Groceries
                        WHERE id=@id;          
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);

                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }
                return StatusCode(200, "Xóa thông tin cửa hàng thành công!");
            }
            catch (System.Exception)
            {
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet ("getGroInfoByPartnerId/{id}")]
        public ActionResult GetGroInfoByPartnerId(int id)
        {
            try
            {
                string query = @"SELECT G.id, G.name, G.address, G.type_of_business, G.tax_number FROM Groceries G JOIN Sellers S ON G.seller_id = S.seller_id
                                WHERE G.seller_id=@id";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }
                return Ok(table);
            }
            catch (System.Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet ("{id}")]
        public ActionResult getById(int id) 
        {
            try
            {
                string query = @"SELECT id, seller_id, name, gro_address, type_of_business, tax_number, business_field, availble_product, avg_availble_product, avg_order, gro_road_name, gro_apartment_number FROM Groceries WHERE id=@id";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }
                return Ok(table);
            }
            catch (System.Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpDelete("deleteBySellerId/{id}")]
        public ActionResult DeleteBySellerId(int id)
        {
            try
            {
                string query = @"
                        DELETE FROM Groceries
                        WHERE seller_id=@id;          
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);

                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }
                return StatusCode(200, "Xóa thông tin cửa hàng thành công!");
            }
            catch (System.Exception)
            {
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
