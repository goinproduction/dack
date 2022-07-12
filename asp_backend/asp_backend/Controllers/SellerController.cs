using asp_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Data;

namespace asp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SellerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet ("unaccepted")]
        public ActionResult getUnacceptedLst()
        {
            try
            {
                string query = @"SELECT S.seller_id, U.email, U.full_name, U.phone, U.gender, 
                                U.identity_number, U.address, G.id, G.name, G.gro_address, U.area FROM User U JOIN Sellers S ON 
                                U.id = S.seller_id JOIN Groceries G ON G.seller_id = S.seller_id WHERE S.is_accepted=0;";

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
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }


        [HttpGet("unaccepted/{id}")]
        public ActionResult getUnacceptedSellerById(string id)
        {
            try
            {
                string query = @"SELECT S.seller_id, S.business_cer, U.area, U.address, U.apartment_number, U.behind_identity, 
                U.date_of_birth, U.front_identity, U.full_name, U.gender, U.identity_number, U.phone, U.road_name,
                G.name, G.gro_address, G.type_of_business, G.tax_number, G.business_field, G.availble_product, G.avg_availble_product,
                G.avg_order, G.gro_road_name, G.gro_apartment_number
                FROM User U JOIN Sellers S ON U.id = S.seller_id JOIN Groceries G ON S.seller_id = G.seller_id WHERE S.is_accepted=0 AND S.seller_id=@id";

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
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet("accepted")]
        public ActionResult getAcceptedLst()
        {
            try
            {
                string query = @"SELECT S.seller_id, U.email, U.full_name, U.phone, U.gender, 
                                U.identity_number, U.address, G.id, G.name, G.gro_address, U.area FROM User U JOIN Sellers S ON 
                                U.id = S.seller_id JOIN Groceries G ON G.seller_id = S.seller_id WHERE S.is_accepted=1;";

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
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet("accepted/{id}")]
        public ActionResult getAcceptedSellerById(string id)
        {
            try
            {
                string query = @"SELECT S.seller_id, S.business_cer, U.area, U.address, U.apartment_number, U.behind_identity, 
                U.date_of_birth, U.front_identity, U.full_name, U.gender, U.identity_number, U.phone, U.road_name,
                G.name, G.gro_address, G.type_of_business, G.tax_number, G.business_field, G.availble_product, G.avg_availble_product,
                G.avg_order, G.gro_road_name, G.gro_apartment_number
                FROM User U JOIN Sellers S ON U.id = S.seller_id JOIN Groceries G ON S.seller_id = G.seller_id WHERE S.is_accepted=1 AND S.seller_id=@id";

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
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                string query = @"
                        DELETE FROM Sellers
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

                return StatusCode(200, "Xóa thông tin người bán thành công!");
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }
        
        [HttpPost("accepted/{id}")]
        public ActionResult UpdateIsAccepted(string id)
        {
            try
            {
                string query = @"
                        UPDATE Sellers SET
                        is_accepted = true
                        where seller_id=@id;       
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

                return StatusCode(200, "Thông tin bán hàng đã được chấp nhận!");
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpPost("role/{id}")]
        public ActionResult UpdateRole(string id)
        {
            try
            {
                string query = @"
                        UPDATE User SET
                        role = 2
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
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }

                return StatusCode(200, "Vai trò đã được cập nhật thành công!");
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
