package scheduleFromAPI;

public class FullSchedule
{
	Schedule fullgamesschedule;
	public void setFullgameschedule(Schedule s)
	{
		fullgamesschedule = s;
	}
	
	public String toString()
	{
		return fullgamesschedule.toString();
	}
	public Schedule getSchedule()
	{
		return fullgamesschedule;
	}
}