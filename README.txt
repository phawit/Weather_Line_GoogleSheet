# Weather_Line_GoogleSheet

Tools
1.NodeMCU V2
2.DHT22--D3
3.RainSensor--A0
4.LCD20x4.SDA--D2
         .SCL--D1
         .VCC--5V (only)
5.LED--D0,GND
6.Switch--D5,D4
        --GND

DHT11------------->NodeMCU-->LCD20X4
GoogleSheet(LED)-->       -->LED
Switch(interrupt)->       -->Line (Every 8,10,12,14,16,21 o'clock)
                          -->GoogleScrip >> GoogleSheet (every 0,15,30,45 min)
                          
Edit 
Arduino--macos(GoogleScrip)  Publish > Deploy as web app > macosID,everyone 
       --Wifi,pass
       --figure print // echo | openssl s_client -connect script.google.com:443 |& openssl x509 -fingerprint -noout
       --Line notify
       
GoogleScrip--ID googleSheet
           --Name Sheet1,2 must be match in GoogleSheet
           --LED ColumRow
GoogleSheet--Name Sheet1,2 must be match in GoogleScrip
           --LED ColumRow
           
           
