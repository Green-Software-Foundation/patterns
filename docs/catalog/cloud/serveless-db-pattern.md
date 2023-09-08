Title: Serveless DB pattern 
============================

Description:
--------------
With the advent of the cloud and with it the introduction of serverless computing, there is the opportunity to share resources, increase the utilization of the underlying hardware and only pay for the actual use - not for the potential idle hardware. This usage pattern should also be adopted for storing data in databases.

Solution: 
--------------
By select a Serveless/shared tenant DB, the DB load will increase or decrease by the given demand. This saves resources without impacting the performance.

SCI Impact: 
-------------
E: energy usage = Only use the energy you use for computation. Avoid having resources consume energy while being idle. 

Assumptions: 
--------------
E: energy usage = Only use the energy you use for computation. Avoid having resources consume energy while being idle. 
ondemand database offering exists (AWS serverless aurora, MS Azure sql serverless tier, ...)

Considerations: 
--------------
E: energy usage = Only use the energy you use for computation. Avoid having resources consume energy while being idle. 
When moving to the serverless db pattern, you might loose the fine-grained control and with it the performance optimization possibilities for specific hardware and or operating system. 

References: n/a
