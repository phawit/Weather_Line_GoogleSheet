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

DHT11------------->NodeMCU-->LCD20X4 (BackLight On-Off from Switch)
GoogleSheet(LED)-->       -->LED
Switch(interrupt)->       -->Line (Every 8,10,12,14,16,21 o'clock)
                          -->Line (When Rain is Coming!)
                          -->GoogleScrip >> GoogleSheet (every 0,15,30,45 min)
                          
Edit 
Arduino--macos(GoogleScrip)  Publish > Deploy as web app > macosID,everyone 
       --Wifi,pass
       --figure print // echo | openssl s_client -connect script.google.com:443 |& openssl x509 -fingerprint -noout
       --Line notify
       
GoogleScrip--https://script.google.com/d/1vzrNZcEM_IEwEpbTOpn0DEi6-JNIZnF5HK-dMwNnzFHYoXtFIBF6Gi2b/edit?usp=drive_web
           --ID googleSheet
           --Name Sheet1,2 must be match in GoogleSheet
           --LED ColumRow
           
           
GoogleSheet--https://docs.google.com/spreadsheets/d/1x3DLh6ljvsSObuWCqPWhidLB-abE3eRX5QWUFSSX5VA/edit#gid=0
           --Name Sheet1,2 must be match in GoogleScrip
           --LED ColumRow
           
           
           
